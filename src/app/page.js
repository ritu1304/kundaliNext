import Image from "next/image";
import KundaliChart from "@/components/Kundali";
import Form from "@/components/Form";

const Home = async () => {
  
  return (
    <div className="container">
      <h1 className="heading-desc">KUNDALI</h1>
      <div className="description">
        <p>The science of making Kundli (Astrological chart) and reading Horoscope is called Astrology. Astrology is also called Jyoti Shastra, Jyoti means light and the scripture which illuminates our life is called Jyotish Shastra. When a newborn baby is born, the map of the sky is called a horoscope, at that time which planet is where, all these are described in the horoscope. The human body is formed by the effects of these planets only. And the activities in his life are the result of a complex action of his karma and the movements of the planets. Kundli describes a person from birth to death.</p>
      </div>
    
      <div className="flex-kundali">
        {/* <PlacesSearch /> */}
      <KundaliChart />
      <Form />
      </div>
      
    </div>
    // <div>
    //   <Inventory products={data} mode="admin" />
    // </div>
  );
}
export default Home;
