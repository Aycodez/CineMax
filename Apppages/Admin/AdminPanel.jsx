import Panel from "@/components/Panel";

const AdminPanel = ({toggle, setToggle}) => {
  return (
    <>
     <div className="bg-darkblue hidden lg:flex h-screen w-[20%] mx-auto pr-4 pl-8 py-3">
        <Panel/>
      </div>
     {toggle && <div className="bg-darkblue fixed backdrop-blur-md z-[999] lg:hidden h-screen w-1/2 mx-auto pr-4 pl-8 py-3">
        <Panel toggle={toggle} setToggle={setToggle}/>
      </div>
}
    </>
   
  );
};

export default AdminPanel;
