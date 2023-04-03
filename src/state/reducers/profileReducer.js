const profileReducer = (profile={
    name: "",
    location: "",
    github: "",
    linkedin: "",
    website: "",
    email: "",
    contact: "",
    position: "",
    tagline: ""
}, action) => {
    switch(action.type){
        case "MANAGE_PROFILE":
            return action.payload;
        default:
            return profile;
    }
}
export default profileReducer