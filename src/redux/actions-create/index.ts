import * as AuthActions from "./authAction";
import * as CertificateActions from "./certificateAction";
import * as CardActions from "./cardAction";

export default {...AuthActions, ...CardActions, ...CertificateActions };
