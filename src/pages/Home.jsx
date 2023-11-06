import Card from '../components/Section.jsx';
import Button from "../components/Button.jsx";
import Text from "../components/Text.jsx";
import Image from "../components/Image.jsx";

export default function Home() {
  const func = () => {
    console.log("React");
  };
  
return (
      <>
<Card>
      <Text
      header="All things UX and Front End"
      textcopy="To see past or ongoing projects please the posts below or through the menus. For any queries contact me by email or phone.
      "
      />
</Card>

<Card>
      <Text
      header="UX Design - Not for Profit Digital Fundraising Model"
      textcopy="5 part blog post on the contemporary Not for Profit (or NFP) Digital Fundraising Model.

      The blog entries will discuss and explore the common Digital Model used by Australian charities, with examples of digital artefacts from Personas to interactive Prototypes."
      />

      <Button
        classname="btn"
        text="Read more"
        buttonFunc={func} backgroundColor={undefined} color={undefined}/>

</Card>

<Card>
      <Text
      header="Figma prototype - YesFresh!"
      textcopy="YesFresh! is a self started project on keeping pace with the latest iOS and Android UI/UX design divergence and convergence.

      The complete prototype is a high level view presentation ready and also development hand over ready screen prototypes set, built in Figma, utilising features from the latest Figma releases such as Variables and advanced Auto Layouts."
      />

      <Button
        classname="btn"
        text="See Figma prototype"
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