import { useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";

export const useProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  const handleClick = useCallback(
    (id: number) => {
      navigate(isEditing ? `/edit-profile/${id}` : "/");
    },
    [navigate, isEditing]
  );

  return {
    goToPage: handleClick,
    isEditing,
    toggleEditing: () => setIsEditing(!isEditing),
  };
};
