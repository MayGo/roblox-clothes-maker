import { useTextureEditorDispatchContext } from "./TextureEditorProvider";
import { TextureEditor } from "./TextureEditor";

export const ImageSide = () => {
  const setImage = useTextureEditorDispatchContext();
  return (
    <TextureEditor
      setImage={setImage}
      defaultImage={"PavingStones092_1K_Color.jpeg"}
    />
  );
};
