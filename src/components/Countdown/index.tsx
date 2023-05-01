import Countdown, { CountdownRendererFn } from "react-countdown";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

interface Props {
  countdownDate: Date;
}

export default function CountdownTimer(props: Props) {
  const theme = useTheme();

  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }): JSX.Element => {
    if (completed) {
      return <Typography variant="h3">The auction has ended!</Typography>;
    } else {
      return (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h3"
            padding={1}
            sx={{
              fontSize: "3rem",
              [theme.breakpoints.down("sm")]: {
                fontSize: "2rem",
              },
            }}
          >
            The auction will end in
          </Typography>
          <Typography variant="h3">
            {days}d {hours}h {minutes}m {seconds}s
          </Typography>
        </Box>
      );
    }
  };

  return <Countdown date={props.countdownDate} renderer={renderer} />;
}
