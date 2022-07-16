class ModalUtils {
  getDetails = (wpm, setData) => {
    let remark = "You Are";
    if (wpm <= 20) remark += " A Snail";
    else if (wpm > 20 && wpm <= 30) remark += " A Tortoise";
    else if (wpm > 30 && wpm <= 40) remark += " A T-Rex";
    else if (wpm > 40 && wpm <= 50) remark += " An Octopus";
    else if (wpm > 50 && wpm <= 60) remark += " A Horse";
    else if (wpm > 60) remark += " A Cheetah";
    setData(remark);
  };
  handleTryAgain = (setStatus) => {
    setStatus("stopped");
    setTimeout(() => {
      setStatus("ongoing");
    }, 200);
  };
}
export default new ModalUtils();
