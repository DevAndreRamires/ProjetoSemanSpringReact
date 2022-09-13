import icone from '../../assets/img/notification-icon.svg'

import './style.css'


function NotificationButton() {
    return(
        <div className="dsmeta-red-button">
        <img src={icone} alt="Notificar" />
        
    </div>
      )
  }
  
  export default NotificationButton