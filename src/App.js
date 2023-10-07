import { useEffect, useState } from "react";
import BottomBar from "./Components/BottomBar/BottomBar";
import TopDisplay from "./Components/TopDisplay/TopDisplay";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [giftClaimed, setGiftClaimed] = useState(false);
  const { width, height } = useWindowSize()

  return (
    <>

        <Confetti width={width} height={height} numberOfPieces={giftClaimed ? 500 : 0}></Confetti>

      <TopDisplay
        Title={
          pageNumber === 1
            ? "Happy Birthday"
            : pageNumber === 2
            ? "Claim Your Gift"
            : "Your gift has been Claimed!"
        }
      >
        {pageNumber === 1 ? (
          <>
            <p>Dear MeeMaw,</p>

            <p style={{ textAlign: "center" }}>
              We are wishing you a very happy birthday and send you so much love{" "}
            </p>
            <p style={{ textAlign: "center" }}>❤️❤️❤️</p>
            <p>Love,</p>
            <p>Nick, Jack, Sue & Charlie</p>
          </>
        ) : pageNumber === 2 ? (
          <>
            <p>
              <b>What:</b> Scrabble
            </p>
            <p>
              <b>Where:</b> Your House
            </p>
            <p>
              <b>When:</b> TBD
            </p>
          </>
        ) : (
          <>
            <p style={{ textAlign: "center" }}>see you soon!</p>
          </>
        )}
      </TopDisplay>

      <BottomBar
        currentPageIndex={pageNumber}
        pageCount={3}
        currentButton={
          <button
            className={`card-button-next ${pageNumber === 2 ? "claimed" : ""}`}
            id="card-button-next"
            onClick={() => {
              if (pageNumber === 2) {
                setGiftClaimed(true);
              } else if (pageNumber === 3) {
                setGiftClaimed(false);
              }

              setPageNumber(pageNumber === 1 ? 2 : pageNumber === 2 ? 3 : 1);
            }}
            style={{ height: "40px", width: "100px", borderRadius: "10px", backgroundColor: (pageNumber === 2 ? "#4fd94f" : "#FFFFFF") }}
          >
            {pageNumber === 1 ? "Next" : pageNumber === 2 ? "Claim" : "Restart"}
          </button>
        }
      />
    </>
  );
}

export default App;
