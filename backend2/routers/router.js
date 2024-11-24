import { Router } from "express";
import { handleLogin,registerAlumni,Logout } from "../controllers/credientials.js";
import { cardinfo,eventCarddata } from "../controllers/cardsdata.js";
import {sendpasswordResetemail} from "../controllers/sendmails.js"
import {sendQuerryMessage} from "../controllers/contactus.querry.js"
import {authenticateToken,cookieVerified} from "../middleware/cookieauth.js"
import {SearchAlumni} from "../controllers/searchAlumni.js"
import {updataprofile} from "../controllers/credientials.js"
import {Eventregister} from "../controllers/eventRegister.js"

const router=Router()


router.route("/login").post(handleLogin)
router.route("/registerAlumni").post(registerAlumni)
router.route("/cardinfo").get(cardinfo)
router.route("/v1/sendResetPasswordEmail").post(sendpasswordResetemail)
router.route("/contactusQuerry").post(sendQuerryMessage);
router.route("/cookiesauth").get(authenticateToken,cookieVerified);
router.route("/logout").post(Logout);
router.route("/searchalumni").post(SearchAlumni)
router.route("/updataprofile").post(updataprofile);
router.route("/registerEvent").post(Eventregister);
router.route("/eventdata").get(eventCarddata)


export default router;