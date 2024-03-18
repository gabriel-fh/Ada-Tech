import { Avatar, Button, Loader, Title } from "../../../components";

import { Link } from "react-router-dom";
import { useProfile } from "./hooks/use-profile";

export const Profile = () => {
  const { profiles, goToPage, isEditing, toggleEditing, isLoading } =
    useProfile();

  return (
    <>
      <div className="container">
        <div className="section">
          <Title>Who’s Watching?</Title>

          {/* TODO: componentizar esses aqui */}
          <div className="avatars">
            {profiles?.map((profile) => (
              <button
                className="avatar__item"
                key={profile.id}
                onClick={() => goToPage(profile.id)}
              >
                <Avatar image={profile.avatar.image} isEdit={isEditing} />
                <div className="avatar__name">{profile.name}</div>
              </button>
            ))}
            <Link
              to="/create-profile"
              className="avatar__item avatar__item--new"
            >
              <div className="avatar__image">+</div>
              <div className="avatar__name">New Profile</div>
            </Link>
          </div>

          <div className="avatar__actions">
            <Button variant="filled" onClick={toggleEditing}>
              {isEditing ? "Done" : "Edit"}
            </Button>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
