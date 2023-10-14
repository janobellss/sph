import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-32 gap-8">
      <p className="text-xl text-center">In a galaxy far far away...</p>
      <p className="text-xl text-center">
        Lock on to him, R2. Master, General Grievous's ship is directly ahead
        Master, General Grievous's ship is directly ahead the one crawling with
        vulture droids. I see it. Oh, this is going to be easy. Oddball, do you
        copy? Copy, Red Leader. Mark my position.
      </p>
      <p className="text-xl text-center">
        Save your energy. I can't. Don't give up, Padmé. Obi-Wan's been here,
        hasn't he? He came by this morning.
      </p>
      <p className="text-xl text-center">
        I saw thousands of troops attack the Jedi temple. That's why I went
        looking for Yoda. Have we had any contact from the temple? Received a
        coded retreat message we have. It requests all Jedi to return to the
        temple. It says the war is over.
      </p>
      <p className="text-xl text-center">
        You have done well, Viceroy. When my new apprentice Darth Vader arrives,
        he will take care of you. We're receiving a message from the
        chancellor's office, sir. Send it through. Yes, sir. Senator Organa, the
        supreme chancellor requests your presence, at a special session of
        Congress.
      </p>
      <p className="text-xl text-center">
        Leave us. You know I'm not able to rely on the Jedi Council. If they
        haven't included you in their plot, they soon will. I'm not sure I
        understand. You must sense what I have come to suspect.
      </p>
      <Link
        to="/search"
        className="border-solid border-2 border-white rounded text-white mt-4 py-3 px-8 hover:bg-white hover:text-black"
      >
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
