const router = require("express").Router();

import organizationRoutes from "./organization";
import questionRoutes from "./question";
import quizRoutes from "./quiz";
import studentRoutes from "./students";
import tutorRoutes from "./tutor";

organizationRoutes(router);
questionRoutes(router);
quizRoutes(router);
studentRoutes(router);
tutorRoutes(router);

export default router;
