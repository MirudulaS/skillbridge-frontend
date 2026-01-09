import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h2>Profile</h2>
        <p>User preferences and domains will appear here.</p>
      </div>
    </>
  );
}

export default Profile;