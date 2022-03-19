import React, { useEffect, useState } from 'react'

const MembersCard = (props) => {
  let refresh = props.refresh;
  const [members, setMembers] = useState([])
  const [cover, setCover] = useState(require('../assets/images/user.png'));

  useEffect(() => {
    setMembers(props.data)
  }, [!refresh]);
  return (
    <>
      <div className="card border p-3 mb-3" id="scrollbar3">
        <h4>Members</h4>
        <div className="cart-products-block">
          {
            members ?
              members.map((member, index) =>
                <div className="cart-product member-block" key={index}>
                  {
                    member.joined ? (
                      <a href="#">
                        <img src={member.user.cover ? member.user.cover : cover} alt="" />
                        <span>{member.user.name}</span>
                      </a>
                    ) :

                      <a href="#">
                        <img src={member.user.cover ? member.user.cover : cover} alt="" />
                        <span>{member.user.name}</span>
                      </a>
                  }
                </div>
              )
              :
              <></>
          }
        </div>
      </div>
    </>
  )
}

export default MembersCard