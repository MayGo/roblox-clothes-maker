import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import { memo, useEffect, useRef } from "react";

const myTheme = {
  // Theme object to extends default dark theme.
};

export const TextureEditor = memo(({ setImage, defaultImage }) => {
  const editorRef = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.on("undoStackChanged", function (length) {
      console.info("length", length);
      if (length > 0) {
        console.info("Setting image");
        setTimeout(() => setImage(editorInstance.toDataURL({ format: "png" })));
      }
    });
  }, [setImage]);

  return (
    <ImageEditor
      ref={editorRef}
      includeUI={{
        loadImage: {
          path: defaultImage,
          name: "SampleImage",
        },
        theme: myTheme,
        initMenu: "draw",
        uiSize: {
          width: "100%",
          height: "100%",
        },
        menuBarPosition: "bottom",
      }}
      cssMaxHeight={500}
      cssMaxWidth={700}
      selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70,
      }}
    />
  );
});
