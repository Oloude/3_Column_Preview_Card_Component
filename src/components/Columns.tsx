import Column from "./Column"



function Columns() {
  return (
    <section className="grid grid-cols-1 grid-rows-3 max-w-4xl mx-auto rounded-xl overflow-hidden lg:grid-cols-3 lg:grid-rows-1 ">
        <Column title="sedans" description=" Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." id={1}/>
        <Column title=" SUVs " description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." id={2}/>
        <Column title="Luxury" description="  Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." id={3}/>
    </section>
  )
}

export default Columns

