import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../services/ApiService";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const StoreMenu = () => {
  const { id } = useParams(); // URL에서 storeId 가져오기
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await ApiService.searchStoreMenus(id); // ApiService로 메뉴 요청
        setMenu(data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    fetchMenu();
  }, [id]);

  if (!menu.length) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h6" align="center">
          No menu available for this store.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Store Menu
      </Typography>
      <Grid container spacing={4}>
        {menu.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card>
              {item.thumbnail_url && (
                <CardMedia
                  component="img"
                  height="160"
                  image={item.thumbnail_url}
                  alt={item.name}
                />
              )}
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${item.amount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StoreMenu;
