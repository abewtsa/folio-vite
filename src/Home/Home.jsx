import Card from '../Components/Section.jsx';
import Button from "../Components/Button.jsx";
import Text from "../Components/Text.jsx";
import Image from "../Components/Image.jsx";

export default function Home() {
  const func = () => {
    console.log("hello world");
  };  
  
return (
      <>
<Card>
      <Text
      header="Header text"
      textcopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      "
      />

      <Button
        classname="btn"
        text="click"
        buttonFunc={func} backgroundColor={undefined} color={undefined}/>
</Card>

{/*<Card>
        <Image
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />

        <Image
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />

</Card>
*/}

</>
    );
}