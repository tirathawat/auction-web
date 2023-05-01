import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

interface Props {
  imageUrl: string;
  title: string;
  price: number;
  formUrl: string;
}

export default function ProductCard(props: Props) {
  const handleBid = () => {
    window.open(props.formUrl, "_blank");
  };

  const handleImageError = (event: any) => {
    event.target.src = "https://via.placeholder.com/500x500.png?text=No+Image";
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.imageUrl}
        alt={props.title}
        onError={handleImageError}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Current bid:{" "}
          {props.price.toLocaleString("th-TH", {
            style: "currency",
            currency: "THB",
          })}{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleBid}>
          Bid now!
        </Button>
      </CardActions>
    </Card>
  );
}
