import { createContext, useContext, useState } from "react";

const TextureEditorContext = createContext({});
const TextureEditorDispatchContext = createContext();

export const TextureEditorProvider = ({ children }) => {
  const defaultImage = "PavingStones092_1K_Color.jpeg";

  const [state, dispatch] = useState(defaultImage);
  return (
    <TextureEditorContext.Provider value={state}>
      <TextureEditorDispatchContext.Provider value={dispatch}>
        {children}
      </TextureEditorDispatchContext.Provider>
    </TextureEditorContext.Provider>
  );
};

export const useTextureEditorContext = () => {
  const state = useContext(TextureEditorContext);
  const dispatch = useContext(TextureEditorDispatchContext);

  if (state === undefined || dispatch === undefined) {
    throw new Error(
      "useTextureEditorContext must be used within a TextureEditorContext"
    );
  }

  return [state, dispatch];
};

export const useTextureEditorDispatchContext = () => {
  const dispatch = useContext(TextureEditorDispatchContext);

  if (dispatch === undefined) {
    throw new Error(
      "useTextureEditorContext must be used within a TextureEditorContext"
    );
  }

  return dispatch;
};
