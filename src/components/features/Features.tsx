import Card from "./Card";

const Features = () => {
  return (
    <section className="mt-32">
      <div className="mx-10 sm:mx-14 md:mx-16 lg:mx-20 border-t border-black pt-24">
        <p className="text-red">FEATURES</p>
        <h2 className="text-5xl font-extrabold mt-3 text-offWhite">
          What I Do
        </h2>
        {/* card Component */}
        <Card />
      </div>
    </section>
  );
};

export default Features;
