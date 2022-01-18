import PropTypes from "prop-types";
import { Notif } from "./Notification.styled";
const Notification = ({ message }) => <Notif>{message}</Notif>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
