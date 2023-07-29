import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import "./ClickBox.css";

/**
 * 
 * @param {text, funcClickOk, funcClickCancel} param0 -text-tekstas ant mygtuko, funcClickOk-callbackine f-ja "ok" mygtukui
 * funcClickCancel - callbackine f-ja "Cancel" mygtukui
 * @returns 
 */
function ClickBox({ text, funcClickOk, funcClickCancel }) {
  const clickBoxRef = useRef(null);
  const clickOkRef = useRef(null);

  useEffect(() => {
    console.log("clickBoxRef.current");
    //console.log(clickBoxRef.current.innerHTML);
    function clickHandler(event) {
      if (
        event.target !== clickBoxRef.current &&
        event.target !== clickOkRef.current
      ) {
        funcClickCancel();
        //  clickBoxRef.current.remove();
      }
      console.log(event);
    }
    setTimeout(() => {
      window.addEventListener("click", clickHandler);
    });

    // console.log(event);

    //   if (event.target === clickOkRef.current) console.log("OK paspaustas");
    return () => {
        console.log("remove")
        window.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <>
      <div ref={clickBoxRef} className="clickBoxMain" id="clickBox">
        {text}
        <div className="buttoRrow">
          <Button
            text="Cancel"
            unique_id="cancelBtn"
            clickEvent={() => {
                funcClickCancel();
            }}
          />

          <button
            ref={clickOkRef}
            key="okBtn"
            type="button"
            className="btn"
            onClick={funcClickOk}

            // onClick={() => {
            //     clickBoxRef.current.remove();
            //     funcClickOk;
            //   }}
          >
            OK
          </button>
          {/* <Button ref={clickOkRef} text="OK" unique_id="okBtn" clickEvent={()=> {}}/> */}
        </div>
      </div>
    </>
  );
}

export default ClickBox;
