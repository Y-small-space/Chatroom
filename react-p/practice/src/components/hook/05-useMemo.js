import React, { useEffect, useMemo, useState } from 'react';
import axios from "axios";

export default function Cinema() {
  const [mytext, setMytext] = useState("");
  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=1101008&ticketFlag=1&k=7406159",
      method: "get",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.04","e":"1639541656231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(
      res => {
        setCinema(res.data.data.cinemas);
      }
    );
  }, []);

  const getCinemaList = useMemo(() => {
    return cinema.filter(item => item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase()));
  }, [cinema, mytext]);

  return (
    <div>
      <input value={mytext} onChange={(evt) => { setMytext(evt.target.value) }} />
      {
        getCinemaList.map(item =>
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dt>{item.address}</dt>
          </dl>
        )
      }
    </div>
  );
}
