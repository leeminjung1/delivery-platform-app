import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService"; // ApiService 가져오기
import { setStores } from "../store/slices/storeSlice";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const StoreList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stores = useSelector((state) => state.store.stores);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await ApiService.searchStores(); // ApiService로 가게 목록 요청
        dispatch(setStores(data));
      } catch (error) {
        console.error("Failed to fetch stores:", error);
      }
    };

    fetchStores();
  }, [dispatch]);

  const handleStoreClick = (id) => {
    navigate(`/store/${id}/menu`); // StoreMenu 페이지로 이동
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Store List
      </Typography>
      <Grid container spacing={4}>
        {stores.map((store) => (
          <Grid item key={store.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                cursor: "pointer",
                "&:hover": { boxShadow: 6 },
              }}
              onClick={() => handleStoreClick(store.id)}
            >
              {store.thumbnail_url && (
                <CardMedia
                  component="img"
                  height="160"
                  image={store.thumbnail_url}
                  alt={store.name}
                />
              )}
              <CardContent>
                <Typography variant="h6">{store.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {store.address || "No address available"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StoreList;
