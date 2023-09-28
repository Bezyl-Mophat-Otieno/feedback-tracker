import "../styles/dashboard.css";
import { useLoaderData, useNavigation } from "react-router-dom";

function Dashboard() {
  const navigation = useNavigation();
  console.log(navigation);
  if (navigation.state === "loading") {
    return <h1>Loading....</h1>;
  }
  const data: any = useLoaderData();
  return (
    <div className="dash-container">
      <div className="sidenav">
        <div className="sidenav__header">
          <h1>The Jitu</h1>
        </div>
        <div className="sidenav__links">
          <div className="links-container">
            <button className="btn-links">Notifications</button>
            <button className="btn-links">Statistics</button>
            <button className="btn-links">Feedback</button>
            <button className="btn-links">Ratings</button>
            <button className="btn-links">Lessons</button>
          </div>
        </div>
      </div>
      <div className="feedcontainer">
        <div className="msg-container">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            suscipit reiciendis ea esse nemo labore ipsum dignissimos atque
            deleniti necessitatibus, numquam voluptates voluptatum illum,
            praesentium pariatur? Saepe commodi ut necessitatibus!
          </p>
          <button className="msg-btn">service</button>
        </div>
        <div className="msg-container">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            suscipit reiciendis ea esse nemo labore ipsum dignissimos atque
            deleniti necessitatibus, numquam voluptates voluptatum illum,
            praesentium pariatur? Saepe commodi ut necessitatibus!
          </p>
          <button className="msg-btn">service</button>
        </div>
        <div className="msg-container">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            suscipit reiciendis ea esse nemo labore ipsum dignissimos atque
            deleniti necessitatibus, numquam voluptates voluptatum illum,
            praesentium pariatur? Saepe commodi ut necessitatibus!
          </p>
          <button className="msg-btn">service</button>
        </div>
        <div className="msg-container">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            suscipit reiciendis ea esse nemo labore ipsum dignissimos atque
            deleniti necessitatibus, numquam voluptates voluptatum illum,
            praesentium pariatur? Saepe commodi ut necessitatibus!
          </p>
          <button className="msg-btn">service</button>
        </div>
        <div className="msg-container">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            suscipit reiciendis ea esse nemo labore ipsum dignissimos atque
            deleniti necessitatibus, numquam voluptates voluptatum illum,
            praesentium pariatur? Saepe commodi ut necessitatibus!
          </p>
          <button className="msg-btn-serviced">serviced</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

export const dataLoader = async () => {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  return data;
};
