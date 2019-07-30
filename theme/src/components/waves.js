export default {
  default: {
    Wave: {
      width: ["100%", "960px"],
      marginTop: "40px",
      marginLeft: [0, "calc(50% - 480px)"],
      marginBottom: "40px",
      position: "relative",
      display: ["block", "flex"],
    },
    ScrollerContainer: {
      flex: [1, "430px"],
      paddingLeft: [0, "50px"],
      paddingTop: ["50px", 0],
    },
    ScrollerStep: {
      position: "relative",
      padding: [0, "0 10px"],
      minHeight: "250px",
      display: "flex",
      alignItems: "center",
      borderLeft: ["none", "3px solid transparent"],
    },
    ScrollerProgress: {
      position: "absolute",
      left: ["-12px", "-3px"],
      backgroundColor: "primary",
    },
    StickerContainer: {
      width: ["100vw", "480px"],
      marginLeft: ["calc(50% - 50vw)", 0],
      position: ["sticky", "static"],
      top: [0, "auto"],
      zIndex: [1, "auto"],
      height: ["calc(100vw * 9 / 16)", "auto"],
      fontSize: ["0.8em", "0.8em"],
    },
    Sticker: {
      position: ["static", "sticky"],
      width: ["100%", "480px"],
      height: ["100%", "calc(480px * 9 / 16)"],
      top: ["auto", "calc(50vh - 480px * 9 / 32)"],
      border: ["none", "1px solid"],
      borderColor: "secondary",
      overflow: "hidden",
      boxShadow: "0 20px 50px 0 rgba(0,0,0,0.3)",
    },
    // this is used to select the active scroller step
    // 0.5 selects the step that is at half the screen height
    // 0.7 the step that is at 70% the screen height
    focus: [0.7, 0.5],
  },
}
