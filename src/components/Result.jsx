import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const Result = ({ inputValueData }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValueData}`);
      setShortenLink(res.data.result.full_short_link);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValueData.length) {
      fetchData();
    }
  }, [inputValueData]);

  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  
  
  
  if(loading) {
    return <p className="load">Loading Data.....</p>
  }
  
  
  
  if(error) {
    return <p className="load">Something wrong :(</p>
  }


  return (
    <>
      {shortenLink && (
        <div className="output">
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>Copy link to Clipboard and paste it</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  )
}

export default Result