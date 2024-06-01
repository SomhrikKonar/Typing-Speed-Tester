import React, { useState, useEffect } from "react";
import InputField from "../../Components/InputField/InputField";
import { CenterdContainer } from "../../StyledComponents/CenteredContainer";
import { PageContainer } from "../../StyledComponents/PageContainer";
import { Div } from "../../StyledComponents/Div";
import Info from "../../Components/Info/Info";
import Modal from "../../Components/Modal/Modal";
import { setToDefault } from "../../Store/Reducers/CounterReducer";
import { useStore } from "../../Store/Store";

function HomePage() {
  const [status, setStatus] = useState("stopped");
  const [deviceNotSupported,setDeviceNotSupported]=useState(false)
  const [, dispatch] = useStore();
  
  useEffect(()=>{
    const isDeviceSupported = () =>{
      const width = window.innerWidth
      if(width<850){
        setDeviceNotSupported(true)
      }else if(deviceNotSupported){
        setDeviceNotSupported(false)
      }
      setStatus("stopped");
      dispatch(setToDefault());
    }
    isDeviceSupported()
    window.addEventListener("resize",isDeviceSupported)
    return () => {
      window.removeEventListener("resize",isDeviceSupported)
    }
  },[deviceNotSupported])

  return (
    deviceNotSupported ? (
      <PageContainer backgroundColor="#282828">
        <Div fontSize="20px" color="white" display="flex" alignItems="center" justifyContent="center" height="100%">
          Device not supported !
        </Div>
      </PageContainer>
    ) :(
      <PageContainer backgroundColor="#f6f6f7">
        {status === "completed" && <Modal setStatus={setStatus} />}
        <CenterdContainer flexDirection="column">
          <Div fontSize="20px" margin="-10vh 0 10px 0">
            TYPING SPEED TEST
          </Div>
          <Div fontSize="50px" fontWeight="bold" marginBottom="40px">
            Test your typing skills
          </Div>
          <Info status={status} setStatus={setStatus} />
          <InputField setStatus={setStatus} status={status} />
        </CenterdContainer>
      </PageContainer>
    )
  )
}

export default HomePage;
