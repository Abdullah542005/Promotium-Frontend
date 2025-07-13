
import xlogo from "../../assets/Images/xlogo.png"
import "./Post.css"


export default function Post({name,address,createdTime,isfollowed,postHead,postBody,tags}){
    return(
        <div className="Post">
            <div className="PostHead">
                  <div>
                      <img></img>
                      <div>
                           <h2 style={{fontWeight:'bold'}} className="FontNormal">{name}</h2>
                           <h4 className="FontNormal">{address}</h4>
                      </div>
                     <h4 style={{marginLeft:"20px"}} className="FontNormal">{createdTime}</h4>
                  </div>
                  <h2 className="FontNormal" style={{fontWeight:'bold'}}>{isfollowed?"Following":"+ Follow"}</h2>
            </div>

            <div className="PostBody">
                 <h1 className="FontHead">{postHead}</h1>
                 <p className="FontNormal">{postBody}</p>
                 <div className="PostTags">
                   {tags.map((tag)=><span><h2>{tag}</h2></span>)} 
                 </div>
                 <button>VIEW 
                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#ffffff"></path> </g></svg>
                 </button>
                  
                  <div className="SocialIcons">
                   <img src={xlogo}></img>
                   <svg width="23px" height="23px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"></path><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"></path></g></svg>
            </div>

            </div>

           
            
         </div>
    )
}