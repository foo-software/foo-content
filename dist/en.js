"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ERROR_DISABLED=exports.ERROR_BRAINTREE_TRANSACTION_DECLINE=exports.ERROR_BRAINTREE_GET_SUBSCRIPTION=exports.ERROR_BRAINTREE_GET_CLIENT_TOKEN=exports.ERROR_BRAINTREE_CREATE_SUBSCRIPTION=exports.ERROR_BRAINTREE_CREATE_SALE_TRANSACTION=exports.ERROR_AUTHENTICATION_WRONG_PASSWORD=exports.ERROR_AUTHENTICATION_NO_USER=exports.ERROR_AUTHENTICATION_INVALID_PASSWORD=exports.ERROR_AUTHENTICATION_INVITE_EXPIRED=exports.ERROR_AUTHENTICATION_FORBIDDEN=exports.ERROR_AUTHENTICATION_EMAIL_TAKEN=exports.ERROR_ALERTS_MAX_REACHED=exports.ERROR_ALERT_UPDATE=exports.ERROR_ALERT_REMOVE=exports.ERROR_ALERT_INVALID_SLACK_URL=exports.ERROR_ALERT_EMAIL_CONFIRMATION_RESEND_NOT_FOUND=exports.ERROR_ALERT_EMAIL_CONFIRMATION_RESEND=exports.ERROR_ALERT_EMAIL_CONFIRMATION=exports.ERROR_ALERT_CREATE=exports.ERROR_ACCOUNT_UPDATE_FROM_SUBSCRIPTION=exports.ERROR_ACCOUNT_UPDATE_USER=exports.ERROR_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE=exports.ERROR_ACCOUNT_UPGRADE=exports.ERROR_ACCOUNT_REMOVE_USER=exports.ERROR_ACCOUNT_IS_READ_ONLY_USER_EMAIL_UNCONFIRMED=exports.ERROR_ACCOUNT_IS_READ_ONLY=exports.ERROR_ACCOUNT_GET_SUBSCRIPTION=exports.ERROR_ACCOUNT_FREE_ALREADY_USED=exports.ERROR_ACCOUNT_CREATE_NO_CREDIT=exports.ERROR_ACCOUNT_CREATE=exports.EMAIL_TEMPLATE_WELCOME_SUBJECT=exports.EMAIL_TEMPLATE_WELCOME_MAIN=exports.EMAIL_TEMPLATE_WELCOME_HEADLINE=exports.EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_SUBJECT=exports.EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_MAIN=exports.EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_HEADLINE=exports.EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_CTA=exports.EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_SUBJECT=exports.EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_MAIN=exports.EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_HEADLINE=exports.EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_CTA=exports.EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_SUBJECT=exports.EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_MAIN=exports.EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_HEADLINE=exports.EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_CTA=exports.EMAIL_TEMPLATE_PASSWORD_RESET_SUBJECT=exports.EMAIL_TEMPLATE_PASSWORD_RESET_MAIN=exports.EMAIL_TEMPLATE_PASSWORD_RESET_CTA=exports.EMAIL_TEMPLATE_PASSWORD_RESET_HEADLINE=exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_LINK_CTA=exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_CTA=exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEADLINE=exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_SUBJECT=exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_MAIN=exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_SUBJECT=exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_MAIN=exports.EMAIL_TEMPLATE_INVITE_ACCEPTED_SUBJECT=exports.EMAIL_TEMPLATE_INVITE_ACCEPTED_MAIN=exports.EMAIL_TEMPLATE_INVITE_ACCEPTED_HEADLINE=exports.EMAIL_TEMPLATE_INVITE_ACCEPTED_CTA=exports.EMAIL_TEMPLATE_ID_WELCOME=exports.EMAIL_TEMPLATE_ID_SUBSCRIPTION_PAYMENT_PAST_DUE=exports.EMAIL_TEMPLATE_ID_SUBSCRIPTION_UPGRADED=exports.EMAIL_TEMPLATE_ID_SUBSCRIPTION_CREATED=exports.EMAIL_TEMPLATE_ID_PASSWORD_RESET=exports.EMAIL_TEMPLATE_ID_PAGE_HEALTH_ALERT_UNHEALTHY=exports.EMAIL_TEMPLATE_ID_PAGE_HEALTH_ALERT_HEALTHY=exports.EMAIL_TEMPLATE_ID_INVITE_ACCEPTED=exports.EMAIL_TEMPLATE_ID_EMAIL_CONFIRM=exports.EMAIL_TEMPLATE_ID_EMAIL_ALERT_CONFIRM=exports.EMAIL_TEMPLATE_ID_ACCOUNT_USER_REMOVED_CONFIRMATION=exports.EMAIL_TEMPLATE_ID_ACCOUNT_USER_INVITED=exports.EMAIL_TEMPLATE_ID_ACCOUNT_USER_ADDED=exports.EMAIL_TEMPLATE_ID_ACCOUNT_CANCEL=exports.EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_SUBJECT=exports.EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_MAIN=exports.EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_HEADLINE=exports.EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_CTA=exports.EMAIL_TEMPLATE_EMAIL_CONFIRM_SUBJECT=exports.EMAIL_TEMPLATE_EMAIL_CONFIRM_HEADLINE=exports.EMAIL_TEMPLATE_EMAIL_CONFIRM_CTA=exports.EMAIL_TEMPLATE_EMAIL_CONFIRM=exports.EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_SUBJECT=exports.EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_MAIN=exports.EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_HEADLINE=exports.EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_CTA=exports.EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_SUBJECT=exports.EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_MAIN=exports.EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_HEADLINE=exports.EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_CTA=exports.EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_SUBJECT=exports.EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_MAIN=exports.EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_HEADLINE=exports.EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_CTA=exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_SUBJECT=exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_MAIN_FREE_TRIAL=exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_MAIN=exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_HEADLINE=exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_CTA=void 0,exports.VALIDATON_ERROR_REQUIRED_MESSAGE=exports.VALIDATON_ERROR_REQUIRED_FETCH_TIME=exports.VALIDATON_ERROR_REQUIRED_EMAIL=exports.VALIDATON_ERROR_REQUIRED_AUDITS=exports.VALIDATON_ERROR_REQUIRED_ACCOUNT_ID=exports.SUCCESS_USER_LOGOUT=exports.SUCCESS_USER_LOGIN=exports.SUCCESS_USER_EMAIL_CONFIRMATION_SENT=exports.SUCCESS_USER_CREATE_PASSWORD_RESET_TOKEN=exports.SUCCESS_UPDATE=exports.SUCCESS_REMOVE=exports.SUCCESS_PAGE_REMOVE=exports.SUCCESS_PAGE_UPDATE=exports.SUCCESS_PAGE_CREATE=exports.SUCCESS_INVITATION_CREATE=exports.SUCCESS_GENERIC=exports.SUCCESS_ALERT_REMOVE=exports.SUCCESS_ALERT_UPDATE=exports.SUCCESS_ALERT_EMAIL_CONFIRMATION_RESEND=exports.SUCCESS_ALERT_EMAIL_CONFIRMATION=exports.SUCCESS_ALERT_CREATE=exports.SUCCESS_ACCOUNT_UPDATE_USER=exports.SUCCESS_ACCOUNT_UPGRADE=exports.SUCCESS_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE=exports.SUCCESS_ACCOUNT_REMOVE_USER=exports.SUCCESS_ACCOUNT_CREATE=exports.ROLE_3_NAME=exports.ROLE_3_DESCRIPTION=exports.ROLE_2_NAME=exports.ROLE_2_DESCRIPTION=exports.ROLE_1_NAME=exports.ROLE_1_DESCRIPTION=exports.ROLE_0_NAME=exports.ROLE_0_DESCRIPTION=exports.PRODUCT_REGION_US_WEST_LABEL=exports.PRODUCT_REGION_US_EAST_LABEL=exports.PRODUCT_ALERT_SLACK_LABEL=exports.PRODUCT_ALERT_PAGER_DUTY_LABEL=exports.PRODUCT_ALERT_EMAIL_LABEL=exports.PRODUCT_3_BULLET_6=exports.PRODUCT_3_BULLET_5=exports.PRODUCT_3_BULLET_4=exports.PRODUCT_3_BULLET_3=exports.PRODUCT_3_BULLET_2=exports.PRODUCT_3_BULLET_1=exports.PRODUCT_3_NAME=exports.PRODUCT_3_DESCRIPTION=exports.PRODUCT_2_BULLET_6=exports.PRODUCT_2_BULLET_5=exports.PRODUCT_2_BULLET_4=exports.PRODUCT_2_BULLET_3=exports.PRODUCT_2_BULLET_2=exports.PRODUCT_2_BULLET_1=exports.PRODUCT_2_NAME=exports.PRODUCT_2_DESCRIPTION=exports.PRODUCT_1_BULLET_5=exports.PRODUCT_1_BULLET_4=exports.PRODUCT_1_BULLET_3=exports.PRODUCT_1_BULLET_2=exports.PRODUCT_1_BULLET_1=exports.PRODUCT_1_NAME=exports.PRODUCT_1_DESCRIPTION=exports.PRODUCT_0_NAME=exports.PRODUCT_0_DESCRIPTION=exports.HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_LABEL=exports.HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_DETAIL=exports.HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_LABEL=exports.HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_DETAIL=exports.INVALID_URL=exports.INVALID_EMAIL=exports.ERROR_USER_RESET_PASSWORD_TOKEN_EXPIRED=exports.ERROR_USER_RESET_PASSWORD_NO_USER_TOKEN=exports.ERROR_USER_RESET_PASSWORD_INVALID_PASSWORD=exports.ERROR_USER_RESET_PASSWORD=exports.ERROR_USER_REGISTER_ACCOUNT_CREATION=exports.ERROR_USER_REGISTER=exports.ERROR_USER_LOGIN=exports.ERROR_USER_EMAIL_CONFIRMATION_SENT=exports.ERROR_USER_CREATE_PASSWORD_RESET_TOKEN_NO_USER=exports.ERROR_USER_CREATE_PASSWORD_RESET_TOKEN=exports.ERROR_USER_ACCOUNT_SUSPENDED=exports.ERROR_UPDATE=exports.ERROR_UNHANDLED_EXCEPTION=exports.ERROR_UNAUTHENTICATED=exports.ERROR_SLACK_NATIVE=exports.ERROR_SLACK_INVALID_OAUTH_ACCESS_RESPONSE=exports.ERROR_SLACK_CREATE_ACCOUNT_ALERT=exports.ERROR_REMOVE=exports.ERROR_PAGE_REMOVE=exports.ERROR_PAGE_UPDATE=exports.ERROR_PAGE_MISSING=exports.ERROR_PAGE_MAX_PAGES=exports.ERROR_PAGE_CREATE=exports.ERROR_NAVIGATION_TIMEOUT=exports.ERROR_MISSING_REQUIRED_FIELDS=exports.ERROR_INVITATION_MAX_USERS=exports.ERROR_INVITATION_CREATE=exports.ERROR_GENERIC=exports.ERROR_FLAGGED_FOR_REMOVAL=exports.ERROR_EMAIL_ALREADY_TAKEN=void 0,exports.VALIDATON_ERROR_REQUIRED_SUBSCRIPTION_ID=exports.VALIDATON_ERROR_REQUIRED_USER_AGENT=exports.VALIDATON_ERROR_REQUIRED_URL=exports.VALIDATON_ERROR_REQUIRED_ROLE_ID=exports.VALIDATON_ERROR_REQUIRED_PRODUCT_ID=exports.VALIDATON_ERROR_REQUIRED_PAGE_ID=exports.VALIDATON_ERROR_REQUIRED_PASSWORD=exports.VALIDATON_ERROR_REQUIRED_OWNER_ID=exports.VALIDATON_ERROR_REQUIRED_LIGHTHOUSE_VERSION=exports.VALIDATON_ERROR_REQUIRED_NAME=void 0;var EMAIL_TEMPLATE_ACCOUNT_CANCEL_CTA="Come back anytime!";exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_CTA=EMAIL_TEMPLATE_ACCOUNT_CANCEL_CTA;var EMAIL_TEMPLATE_ACCOUNT_CANCEL_HEADLINE="Account Canceled";exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_HEADLINE=EMAIL_TEMPLATE_ACCOUNT_CANCEL_HEADLINE;var EMAIL_TEMPLATE_ACCOUNT_CANCEL_MAIN={get:function(_ref){var accountName=_ref.accountName;return'Sorry to see you go! "'.concat(accountName,'" has been canceled. A prorated refund will be issued shortly if applicable. Feel free to contact us with any questions.')}};exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_MAIN=EMAIL_TEMPLATE_ACCOUNT_CANCEL_MAIN;var EMAIL_TEMPLATE_ACCOUNT_CANCEL_MAIN_FREE_TRIAL={get:function(_ref2){var accountName=_ref2.accountName;return'Sorry to see you go! "'.concat(accountName,'" has been canceled. Because you canceled during the trial period - you will not be charged.')}};exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_MAIN_FREE_TRIAL=EMAIL_TEMPLATE_ACCOUNT_CANCEL_MAIN_FREE_TRIAL;var EMAIL_TEMPLATE_ACCOUNT_CANCEL_SUBJECT="Account Canceled";exports.EMAIL_TEMPLATE_ACCOUNT_CANCEL_SUBJECT=EMAIL_TEMPLATE_ACCOUNT_CANCEL_SUBJECT;var EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_CTA="Manage your accounts here.";exports.EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_CTA=EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_CTA;var EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_HEADLINE="You're Added!";exports.EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_HEADLINE=EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_HEADLINE;var EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_MAIN={get:function(_ref3){var accountName=_ref3.accountName;return"You've been added to \"".concat(accountName,'" Foo account.')}};exports.EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_MAIN=EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_MAIN;var EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_SUBJECT="You Have Been Added";exports.EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_SUBJECT=EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_SUBJECT;var EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_CTA="Accept the invitation by registering here.";exports.EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_CTA=EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_CTA;var EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_HEADLINE="You're Invited!";exports.EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_HEADLINE=EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_HEADLINE;var EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_MAIN={get:function(_ref4){var accountName=_ref4.accountName;return"You've been invited to \"".concat(accountName,'" Foo account.')}};exports.EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_MAIN=EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_MAIN;var EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_SUBJECT="You Have Been Invited";exports.EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_SUBJECT=EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_SUBJECT;var EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_CTA="Visit us anytime!";exports.EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_CTA=EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_CTA;var EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_HEADLINE="Removed Confirmation";exports.EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_HEADLINE=EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_HEADLINE;var EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_MAIN={get:function(_ref5){var accountName=_ref5.accountName;return"This is just a confirmation that you've been removed from \"".concat(accountName,'".')}};exports.EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_MAIN=EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_MAIN;var EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_SUBJECT="Removed from Account Confirmation";exports.EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_SUBJECT=EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_SUBJECT;var EMAIL_TEMPLATE_EMAIL_CONFIRM="Please confirm your email address.";exports.EMAIL_TEMPLATE_EMAIL_CONFIRM=EMAIL_TEMPLATE_EMAIL_CONFIRM;var EMAIL_TEMPLATE_EMAIL_CONFIRM_CTA="Navigate here to confirm.";exports.EMAIL_TEMPLATE_EMAIL_CONFIRM_CTA=EMAIL_TEMPLATE_EMAIL_CONFIRM_CTA;var EMAIL_TEMPLATE_EMAIL_CONFIRM_HEADLINE="Email Confirm";exports.EMAIL_TEMPLATE_EMAIL_CONFIRM_HEADLINE=EMAIL_TEMPLATE_EMAIL_CONFIRM_HEADLINE;var EMAIL_TEMPLATE_EMAIL_CONFIRM_SUBJECT="Confirm Your Email with Foo";exports.EMAIL_TEMPLATE_EMAIL_CONFIRM_SUBJECT=EMAIL_TEMPLATE_EMAIL_CONFIRM_SUBJECT;var EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_CTA="Navigate here to confirm.";exports.EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_CTA=EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_CTA;var EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_HEADLINE="Confirm";exports.EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_HEADLINE=EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_HEADLINE;var EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_MAIN="Please confirm this email as an alert for Foo. This email will be notified with status updates as they occur.";exports.EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_MAIN=EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_MAIN;var EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_SUBJECT="Email Alert Confirm";exports.EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_SUBJECT=EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_SUBJECT;var EMAIL_TEMPLATE_ID_ACCOUNT_CANCEL="d-5d850cea0d6e4262aea1677d5a4e45dc";exports.EMAIL_TEMPLATE_ID_ACCOUNT_CANCEL=EMAIL_TEMPLATE_ID_ACCOUNT_CANCEL;var EMAIL_TEMPLATE_ID_ACCOUNT_USER_ADDED="d-ff5d8e55aace43cca73583ac4e54ca81";exports.EMAIL_TEMPLATE_ID_ACCOUNT_USER_ADDED=EMAIL_TEMPLATE_ID_ACCOUNT_USER_ADDED;var EMAIL_TEMPLATE_ID_ACCOUNT_USER_INVITED="d-5e995c467ff941dcbd5aae3a9f146b4f";exports.EMAIL_TEMPLATE_ID_ACCOUNT_USER_INVITED=EMAIL_TEMPLATE_ID_ACCOUNT_USER_INVITED;var EMAIL_TEMPLATE_ID_ACCOUNT_USER_REMOVED_CONFIRMATION="d-cf4dbc9c87464cdab1a4f07da21ceccb";exports.EMAIL_TEMPLATE_ID_ACCOUNT_USER_REMOVED_CONFIRMATION=EMAIL_TEMPLATE_ID_ACCOUNT_USER_REMOVED_CONFIRMATION;var EMAIL_TEMPLATE_ID_EMAIL_ALERT_CONFIRM="d-f0e2fe2890ed47b5811c20812587a1cb";exports.EMAIL_TEMPLATE_ID_EMAIL_ALERT_CONFIRM=EMAIL_TEMPLATE_ID_EMAIL_ALERT_CONFIRM;var EMAIL_TEMPLATE_ID_EMAIL_CONFIRM="d-044e308ea69741c7b9349d9970ec48f6";exports.EMAIL_TEMPLATE_ID_EMAIL_CONFIRM=EMAIL_TEMPLATE_ID_EMAIL_CONFIRM;var EMAIL_TEMPLATE_ID_INVITE_ACCEPTED="d-9620b0e881a0407facb3ee4904eda072";exports.EMAIL_TEMPLATE_ID_INVITE_ACCEPTED=EMAIL_TEMPLATE_ID_INVITE_ACCEPTED;var EMAIL_TEMPLATE_ID_PAGE_HEALTH_ALERT_HEALTHY="d-0aef9ceb257e48dbbe5f83c7629cda9b";exports.EMAIL_TEMPLATE_ID_PAGE_HEALTH_ALERT_HEALTHY=EMAIL_TEMPLATE_ID_PAGE_HEALTH_ALERT_HEALTHY;var EMAIL_TEMPLATE_ID_PAGE_HEALTH_ALERT_UNHEALTHY="d-eca574ba0dfa4fe59be8f29a2b32424d";exports.EMAIL_TEMPLATE_ID_PAGE_HEALTH_ALERT_UNHEALTHY=EMAIL_TEMPLATE_ID_PAGE_HEALTH_ALERT_UNHEALTHY;var EMAIL_TEMPLATE_ID_PASSWORD_RESET="d-e4f89c8943d9436c95fe2aae3e07a312";exports.EMAIL_TEMPLATE_ID_PASSWORD_RESET=EMAIL_TEMPLATE_ID_PASSWORD_RESET;var EMAIL_TEMPLATE_ID_SUBSCRIPTION_CREATED="d-2c0dbb1acd7045ae8ff7879015cbbd91";exports.EMAIL_TEMPLATE_ID_SUBSCRIPTION_CREATED=EMAIL_TEMPLATE_ID_SUBSCRIPTION_CREATED;var EMAIL_TEMPLATE_ID_SUBSCRIPTION_UPGRADED="d-e32c0427ea4241678eda50b86f99903c";exports.EMAIL_TEMPLATE_ID_SUBSCRIPTION_UPGRADED=EMAIL_TEMPLATE_ID_SUBSCRIPTION_UPGRADED;var EMAIL_TEMPLATE_ID_SUBSCRIPTION_PAYMENT_PAST_DUE="d-ae7346390e2c42b69414c51f725aace9";exports.EMAIL_TEMPLATE_ID_SUBSCRIPTION_PAYMENT_PAST_DUE=EMAIL_TEMPLATE_ID_SUBSCRIPTION_PAYMENT_PAST_DUE;var EMAIL_TEMPLATE_ID_WELCOME="d-ccb4f0689c484dda8f2ffc3c41c9b649";exports.EMAIL_TEMPLATE_ID_WELCOME=EMAIL_TEMPLATE_ID_WELCOME;var EMAIL_TEMPLATE_INVITE_ACCEPTED_CTA="See all users.";exports.EMAIL_TEMPLATE_INVITE_ACCEPTED_CTA=EMAIL_TEMPLATE_INVITE_ACCEPTED_CTA;var EMAIL_TEMPLATE_INVITE_ACCEPTED_HEADLINE="Invite Accepted";exports.EMAIL_TEMPLATE_INVITE_ACCEPTED_HEADLINE=EMAIL_TEMPLATE_INVITE_ACCEPTED_HEADLINE;var EMAIL_TEMPLATE_INVITE_ACCEPTED_MAIN={get:function(_ref6){var email=_ref6.email;return"".concat(email," has accepted your invite!")}};exports.EMAIL_TEMPLATE_INVITE_ACCEPTED_MAIN=EMAIL_TEMPLATE_INVITE_ACCEPTED_MAIN;var EMAIL_TEMPLATE_INVITE_ACCEPTED_SUBJECT="Invite Accepted";exports.EMAIL_TEMPLATE_INVITE_ACCEPTED_SUBJECT=EMAIL_TEMPLATE_INVITE_ACCEPTED_SUBJECT;var EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_MAIN={get:function(_ref7){var pageName=_ref7.pageName;return"".concat(pageName," page has recovered.")}};exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_MAIN=EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_MAIN;var EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_SUBJECT={get:function(_ref8){var pageName=_ref8.pageName;return"".concat(pageName," Has Recovered")}};exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_SUBJECT=EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_SUBJECT;var EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_MAIN={get:function(_ref9){var pageName=_ref9.pageName;return"".concat(pageName," page has become unhealthy.")}};exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_MAIN=EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_MAIN;var EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_SUBJECT={get:function(_ref10){var pageName=_ref10.pageName;return"".concat(pageName," is Unhealthy")}};exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_SUBJECT=EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_SUBJECT;var EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEADLINE="Page Health Status";exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEADLINE=EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEADLINE;var EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_CTA="Dashboard";exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_CTA=EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_CTA;var EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_LINK_CTA="Visit the dashboard.";exports.EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_LINK_CTA=EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_LINK_CTA;var EMAIL_TEMPLATE_PASSWORD_RESET_HEADLINE="Password Reset";exports.EMAIL_TEMPLATE_PASSWORD_RESET_HEADLINE=EMAIL_TEMPLATE_PASSWORD_RESET_HEADLINE;var EMAIL_TEMPLATE_PASSWORD_RESET_CTA="Navigate here to reset your password.";exports.EMAIL_TEMPLATE_PASSWORD_RESET_CTA=EMAIL_TEMPLATE_PASSWORD_RESET_CTA;var EMAIL_TEMPLATE_PASSWORD_RESET_MAIN={get:function(_ref11){var passwordResetDays=_ref11.passwordResetDays;return"You have ".concat(passwordResetDays," days to reset your password.")}};exports.EMAIL_TEMPLATE_PASSWORD_RESET_MAIN=EMAIL_TEMPLATE_PASSWORD_RESET_MAIN;var EMAIL_TEMPLATE_PASSWORD_RESET_SUBJECT="Password Reset";exports.EMAIL_TEMPLATE_PASSWORD_RESET_SUBJECT=EMAIL_TEMPLATE_PASSWORD_RESET_SUBJECT;var EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_CTA="Visit the dashboard.";exports.EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_CTA=EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_CTA;var EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_HEADLINE="Congrats!";exports.EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_HEADLINE=EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_HEADLINE;var EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_MAIN={get:function(_ref12){var price=_ref12.price,trialDuration=_ref12.trialDuration;return"You've successfully created an account subscription. The free trial is ".concat(trialDuration,". If you don't cancel before the end of the trial - you'll be charged ").concat(price," on that day and every month until you cancel. You can cancel anytime in the account section. Cancellations are refunded a prorated amount. If you cancel before the free trial end you won't be charged at all!")}};exports.EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_MAIN=EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_MAIN;var EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_SUBJECT="Subscription Created";exports.EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_SUBJECT=EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_SUBJECT;var EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_CTA="You can update or add a new payment method in billing.";exports.EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_CTA=EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_CTA;var EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_HEADLINE="Payment Status";exports.EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_HEADLINE=EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_HEADLINE;var EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_MAIN='Your subscription payment is past due and therefore your account has been switched to "read only" mode until resolved.';exports.EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_MAIN=EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_MAIN;var EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_SUBJECT="Subscription Payment Past Due";exports.EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_SUBJECT=EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_SUBJECT;var EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_CTA="Visit billing.";exports.EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_CTA=EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_CTA;var EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_HEADLINE="Subscription Upgraded!";exports.EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_HEADLINE=EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_HEADLINE;var EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_MAIN={get:function(_ref13){var price=_ref13.price,planName=_ref13.planName;return'Your account subscription was successfully upgraded to "'.concat(planName,'". You are receiving this email as the owner of the account payment method. Your payment method will be charged ').concat(price," monthly. You can update the payment method and manage billing on our website.")}};exports.EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_MAIN=EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_MAIN;var EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_SUBJECT="Subscription Upgraded";exports.EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_SUBJECT=EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_SUBJECT;var EMAIL_TEMPLATE_WELCOME_HEADLINE="Welcome!";exports.EMAIL_TEMPLATE_WELCOME_HEADLINE=EMAIL_TEMPLATE_WELCOME_HEADLINE;var EMAIL_TEMPLATE_WELCOME_MAIN="Thanks for registering.";exports.EMAIL_TEMPLATE_WELCOME_MAIN=EMAIL_TEMPLATE_WELCOME_MAIN;var EMAIL_TEMPLATE_WELCOME_SUBJECT="Thanks for Registering with Foo - Please Confirm Email";exports.EMAIL_TEMPLATE_WELCOME_SUBJECT=EMAIL_TEMPLATE_WELCOME_SUBJECT;var ERROR_ACCOUNT_CREATE="Error creating account.";exports.ERROR_ACCOUNT_CREATE=ERROR_ACCOUNT_CREATE;var ERROR_ACCOUNT_CREATE_NO_CREDIT="No account credits.";exports.ERROR_ACCOUNT_CREATE_NO_CREDIT=ERROR_ACCOUNT_CREATE_NO_CREDIT;var ERROR_ACCOUNT_FREE_ALREADY_USED="Only one free account allowed.";exports.ERROR_ACCOUNT_FREE_ALREADY_USED=ERROR_ACCOUNT_FREE_ALREADY_USED;var ERROR_ACCOUNT_GET_SUBSCRIPTION="Error getting account subscription.";exports.ERROR_ACCOUNT_GET_SUBSCRIPTION=ERROR_ACCOUNT_GET_SUBSCRIPTION;var ERROR_ACCOUNT_IS_READ_ONLY="This account is read only.";exports.ERROR_ACCOUNT_IS_READ_ONLY=ERROR_ACCOUNT_IS_READ_ONLY;var ERROR_ACCOUNT_IS_READ_ONLY_USER_EMAIL_UNCONFIRMED="This account is read only until the email needs to be confirmed. Go to settings page for help.";exports.ERROR_ACCOUNT_IS_READ_ONLY_USER_EMAIL_UNCONFIRMED=ERROR_ACCOUNT_IS_READ_ONLY_USER_EMAIL_UNCONFIRMED;var ERROR_ACCOUNT_REMOVE_USER="Error removing account user.";exports.ERROR_ACCOUNT_REMOVE_USER=ERROR_ACCOUNT_REMOVE_USER;var ERROR_ACCOUNT_UPGRADE="Error upgrading.";exports.ERROR_ACCOUNT_UPGRADE=ERROR_ACCOUNT_UPGRADE;var ERROR_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE="Error updating the payment method.";exports.ERROR_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE=ERROR_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE;var ERROR_ACCOUNT_UPDATE_USER="Error updating account user.";exports.ERROR_ACCOUNT_UPDATE_USER=ERROR_ACCOUNT_UPDATE_USER;var ERROR_ACCOUNT_UPDATE_FROM_SUBSCRIPTION="Error updating account from subscription.";exports.ERROR_ACCOUNT_UPDATE_FROM_SUBSCRIPTION=ERROR_ACCOUNT_UPDATE_FROM_SUBSCRIPTION;var ERROR_ALERT_CREATE="Error creating alert.";exports.ERROR_ALERT_CREATE=ERROR_ALERT_CREATE;var ERROR_ALERT_EMAIL_CONFIRMATION="Error confirming email.";exports.ERROR_ALERT_EMAIL_CONFIRMATION=ERROR_ALERT_EMAIL_CONFIRMATION;var ERROR_ALERT_EMAIL_CONFIRMATION_RESEND="Error resending confirmation email.";exports.ERROR_ALERT_EMAIL_CONFIRMATION_RESEND=ERROR_ALERT_EMAIL_CONFIRMATION_RESEND;var ERROR_ALERT_EMAIL_CONFIRMATION_RESEND_NOT_FOUND="Error resending confirmation email - alert not found.";exports.ERROR_ALERT_EMAIL_CONFIRMATION_RESEND_NOT_FOUND=ERROR_ALERT_EMAIL_CONFIRMATION_RESEND_NOT_FOUND;var ERROR_ALERT_INVALID_SLACK_URL="Invalid Slack webhook url.";exports.ERROR_ALERT_INVALID_SLACK_URL=ERROR_ALERT_INVALID_SLACK_URL;var ERROR_ALERT_REMOVE="Error removing alert.";exports.ERROR_ALERT_REMOVE=ERROR_ALERT_REMOVE;var ERROR_ALERT_UPDATE="Error updating alert.";exports.ERROR_ALERT_UPDATE=ERROR_ALERT_UPDATE;var ERROR_ALERTS_MAX_REACHED="Maximum alerts reached.";exports.ERROR_ALERTS_MAX_REACHED=ERROR_ALERTS_MAX_REACHED;var ERROR_AUTHENTICATION_EMAIL_TAKEN="That email is taken.";exports.ERROR_AUTHENTICATION_EMAIL_TAKEN=ERROR_AUTHENTICATION_EMAIL_TAKEN;var ERROR_AUTHENTICATION_FORBIDDEN="The user is forbidden.";exports.ERROR_AUTHENTICATION_FORBIDDEN=ERROR_AUTHENTICATION_FORBIDDEN;var ERROR_AUTHENTICATION_INVITE_EXPIRED="That invite is expired.";exports.ERROR_AUTHENTICATION_INVITE_EXPIRED=ERROR_AUTHENTICATION_INVITE_EXPIRED;var ERROR_AUTHENTICATION_INVALID_PASSWORD="Password should be at least 8 characters.";exports.ERROR_AUTHENTICATION_INVALID_PASSWORD=ERROR_AUTHENTICATION_INVALID_PASSWORD;var ERROR_AUTHENTICATION_NO_USER="That user does not exist.";exports.ERROR_AUTHENTICATION_NO_USER=ERROR_AUTHENTICATION_NO_USER;var ERROR_AUTHENTICATION_WRONG_PASSWORD="Wrong password.";exports.ERROR_AUTHENTICATION_WRONG_PASSWORD=ERROR_AUTHENTICATION_WRONG_PASSWORD;var ERROR_BRAINTREE_CREATE_SALE_TRANSACTION="Error creating sale transaction.";exports.ERROR_BRAINTREE_CREATE_SALE_TRANSACTION=ERROR_BRAINTREE_CREATE_SALE_TRANSACTION;var ERROR_BRAINTREE_CREATE_SUBSCRIPTION="Error creating subscription.";exports.ERROR_BRAINTREE_CREATE_SUBSCRIPTION=ERROR_BRAINTREE_CREATE_SUBSCRIPTION;var ERROR_BRAINTREE_GET_CLIENT_TOKEN="Error getting client token.";exports.ERROR_BRAINTREE_GET_CLIENT_TOKEN=ERROR_BRAINTREE_GET_CLIENT_TOKEN;var ERROR_BRAINTREE_GET_SUBSCRIPTION="Error getting subscription.";exports.ERROR_BRAINTREE_GET_SUBSCRIPTION=ERROR_BRAINTREE_GET_SUBSCRIPTION;var ERROR_BRAINTREE_TRANSACTION_DECLINE="There was a problem processing your credit card, please double check your payment information and try again";exports.ERROR_BRAINTREE_TRANSACTION_DECLINE=ERROR_BRAINTREE_TRANSACTION_DECLINE;var ERROR_DISABLED="Disabled.";exports.ERROR_DISABLED=ERROR_DISABLED;var ERROR_EMAIL_ALREADY_TAKEN="That email is already taken.";exports.ERROR_EMAIL_ALREADY_TAKEN=ERROR_EMAIL_ALREADY_TAKEN;var ERROR_FLAGGED_FOR_REMOVAL="This account has been deleted.";exports.ERROR_FLAGGED_FOR_REMOVAL=ERROR_FLAGGED_FOR_REMOVAL;var ERROR_GENERIC="Sorry, something went wrong.";exports.ERROR_GENERIC=ERROR_GENERIC;var ERROR_INVITATION_CREATE="Error creating invitation.";exports.ERROR_INVITATION_CREATE=ERROR_INVITATION_CREATE;var ERROR_INVITATION_MAX_USERS="Max user limit has been reached for this account. If you have outdated pending notifications - try deleting those.";exports.ERROR_INVITATION_MAX_USERS=ERROR_INVITATION_MAX_USERS;var ERROR_MISSING_REQUIRED_FIELDS="Missing required fields.";exports.ERROR_MISSING_REQUIRED_FIELDS=ERROR_MISSING_REQUIRED_FIELDS;var ERROR_NAVIGATION_TIMEOUT={get:function(_ref14){var puppeteerDefaultTimeout=_ref14.puppeteerDefaultTimeout;return"The request took longer than the allowed ".concat(puppeteerDefaultTimeout,"ms.")}};exports.ERROR_NAVIGATION_TIMEOUT=ERROR_NAVIGATION_TIMEOUT;var ERROR_PAGE_CREATE="Error creating page.";exports.ERROR_PAGE_CREATE=ERROR_PAGE_CREATE;var ERROR_PAGE_MAX_PAGES="Max page limit has been reached for this account.";exports.ERROR_PAGE_MAX_PAGES=ERROR_PAGE_MAX_PAGES;var ERROR_PAGE_MISSING="This page does not exist.";exports.ERROR_PAGE_MISSING=ERROR_PAGE_MISSING;var ERROR_PAGE_UPDATE="Error updating page.";exports.ERROR_PAGE_UPDATE=ERROR_PAGE_UPDATE;var ERROR_PAGE_REMOVE="Error removing page.";exports.ERROR_PAGE_REMOVE=ERROR_PAGE_REMOVE;var ERROR_REMOVE="Error removing.";exports.ERROR_REMOVE=ERROR_REMOVE;var ERROR_SLACK_CREATE_ACCOUNT_ALERT="Error creating account alert";exports.ERROR_SLACK_CREATE_ACCOUNT_ALERT=ERROR_SLACK_CREATE_ACCOUNT_ALERT;var ERROR_SLACK_INVALID_OAUTH_ACCESS_RESPONSE="Authentication failed.";exports.ERROR_SLACK_INVALID_OAUTH_ACCESS_RESPONSE=ERROR_SLACK_INVALID_OAUTH_ACCESS_RESPONSE;var ERROR_SLACK_NATIVE="Slack responded with an error.";exports.ERROR_SLACK_NATIVE=ERROR_SLACK_NATIVE;var ERROR_UNAUTHENTICATED="You are unauthenticated, please login.";exports.ERROR_UNAUTHENTICATED=ERROR_UNAUTHENTICATED;var ERROR_UNHANDLED_EXCEPTION="Unhandled error.";exports.ERROR_UNHANDLED_EXCEPTION=ERROR_UNHANDLED_EXCEPTION;var ERROR_UPDATE="Error updating.";exports.ERROR_UPDATE=ERROR_UPDATE;var ERROR_USER_ACCOUNT_SUSPENDED="Your account is pending attention by us. Please contact us if you need more info.";exports.ERROR_USER_ACCOUNT_SUSPENDED=ERROR_USER_ACCOUNT_SUSPENDED;var ERROR_USER_CREATE_PASSWORD_RESET_TOKEN="Error creating reset token.";exports.ERROR_USER_CREATE_PASSWORD_RESET_TOKEN=ERROR_USER_CREATE_PASSWORD_RESET_TOKEN;var ERROR_USER_CREATE_PASSWORD_RESET_TOKEN_NO_USER="No users found with that email.";exports.ERROR_USER_CREATE_PASSWORD_RESET_TOKEN_NO_USER=ERROR_USER_CREATE_PASSWORD_RESET_TOKEN_NO_USER;var ERROR_USER_EMAIL_CONFIRMATION_SENT="Error sending confirmation email.";exports.ERROR_USER_EMAIL_CONFIRMATION_SENT=ERROR_USER_EMAIL_CONFIRMATION_SENT;var ERROR_USER_LOGIN="Error logging in.";exports.ERROR_USER_LOGIN=ERROR_USER_LOGIN;var ERROR_USER_REGISTER="Error registering.";exports.ERROR_USER_REGISTER=ERROR_USER_REGISTER;var ERROR_USER_REGISTER_ACCOUNT_CREATION="Error creating account after registering.";exports.ERROR_USER_REGISTER_ACCOUNT_CREATION=ERROR_USER_REGISTER_ACCOUNT_CREATION;var ERROR_USER_RESET_PASSWORD="Error resetting password.";exports.ERROR_USER_RESET_PASSWORD=ERROR_USER_RESET_PASSWORD;var ERROR_USER_RESET_PASSWORD_INVALID_PASSWORD="Password should be at least 8 characters.";exports.ERROR_USER_RESET_PASSWORD_INVALID_PASSWORD=ERROR_USER_RESET_PASSWORD_INVALID_PASSWORD;var ERROR_USER_RESET_PASSWORD_NO_USER_TOKEN="No user exists with that email and token.";exports.ERROR_USER_RESET_PASSWORD_NO_USER_TOKEN=ERROR_USER_RESET_PASSWORD_NO_USER_TOKEN;var ERROR_USER_RESET_PASSWORD_TOKEN_EXPIRED="Password reset token has expired.";exports.ERROR_USER_RESET_PASSWORD_TOKEN_EXPIRED=ERROR_USER_RESET_PASSWORD_TOKEN_EXPIRED;var INVALID_EMAIL="Invalid email.";exports.INVALID_EMAIL=INVALID_EMAIL;var INVALID_URL="Invalid URL.";exports.INVALID_URL=INVALID_URL;var HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_DETAIL="When a page responds with an HTTP error status code";exports.HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_DETAIL=HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_DETAIL;var HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_LABEL="HTTP error status code";exports.HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_LABEL=HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_LABEL;var HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_DETAIL="When a page responds with an HTTP success status code";exports.HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_DETAIL=HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_DETAIL;var HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_LABEL="HTTP healthy status code";exports.HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_LABEL=HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_LABEL;var PRODUCT_0_DESCRIPTION="A free account for a single user.";exports.PRODUCT_0_DESCRIPTION=PRODUCT_0_DESCRIPTION;var PRODUCT_0_NAME="Basic";exports.PRODUCT_0_NAME=PRODUCT_0_NAME;var PRODUCT_1_DESCRIPTION="Standard account for a small group.";exports.PRODUCT_1_DESCRIPTION=PRODUCT_1_DESCRIPTION;var PRODUCT_1_NAME="Standard";exports.PRODUCT_1_NAME=PRODUCT_1_NAME;var PRODUCT_1_BULLET_1="Health checks every hour.";exports.PRODUCT_1_BULLET_1=PRODUCT_1_BULLET_1;var PRODUCT_1_BULLET_2="10 page limit.";exports.PRODUCT_1_BULLET_2=PRODUCT_1_BULLET_2;var PRODUCT_1_BULLET_3="5 user limit.";exports.PRODUCT_1_BULLET_3=PRODUCT_1_BULLET_3;var PRODUCT_1_BULLET_4="Online reporting.";exports.PRODUCT_1_BULLET_4=PRODUCT_1_BULLET_4;var PRODUCT_1_BULLET_5="Email notifications.";exports.PRODUCT_1_BULLET_5=PRODUCT_1_BULLET_5;var PRODUCT_2_DESCRIPTION="Advanced account for a larger group and number of pages.";exports.PRODUCT_2_DESCRIPTION=PRODUCT_2_DESCRIPTION;var PRODUCT_2_NAME="Advanced";exports.PRODUCT_2_NAME=PRODUCT_2_NAME;var PRODUCT_2_BULLET_1="Health checks every half hour.";exports.PRODUCT_2_BULLET_1=PRODUCT_2_BULLET_1;var PRODUCT_2_BULLET_2="10 page limit.";exports.PRODUCT_2_BULLET_2=PRODUCT_2_BULLET_2;var PRODUCT_2_BULLET_3="10 user limit.";exports.PRODUCT_2_BULLET_3=PRODUCT_2_BULLET_3;var PRODUCT_2_BULLET_4="Online reporting.";exports.PRODUCT_2_BULLET_4=PRODUCT_2_BULLET_4;var PRODUCT_2_BULLET_5="Email notifications.";exports.PRODUCT_2_BULLET_5=PRODUCT_2_BULLET_5;var PRODUCT_2_BULLET_6="Slack and PagerDuty alerting.";exports.PRODUCT_2_BULLET_6=PRODUCT_2_BULLET_6;var PRODUCT_3_DESCRIPTION="Enterprise account for a large group, number of pages and higher frequency of checks.";exports.PRODUCT_3_DESCRIPTION=PRODUCT_3_DESCRIPTION;var PRODUCT_3_NAME="Enterprise";exports.PRODUCT_3_NAME=PRODUCT_3_NAME;var PRODUCT_3_BULLET_1="Health checks every fifteen minutes.";exports.PRODUCT_3_BULLET_1=PRODUCT_3_BULLET_1;var PRODUCT_3_BULLET_2="25 page limit.";exports.PRODUCT_3_BULLET_2=PRODUCT_3_BULLET_2;var PRODUCT_3_BULLET_3="25 user limit.";exports.PRODUCT_3_BULLET_3=PRODUCT_3_BULLET_3;var PRODUCT_3_BULLET_4="Online reporting.";exports.PRODUCT_3_BULLET_4=PRODUCT_3_BULLET_4;var PRODUCT_3_BULLET_5="Email notifications.";exports.PRODUCT_3_BULLET_5=PRODUCT_3_BULLET_5;var PRODUCT_3_BULLET_6="Slack and PagerDuty alerting.";exports.PRODUCT_3_BULLET_6=PRODUCT_3_BULLET_6;var PRODUCT_ALERT_EMAIL_LABEL="Email";exports.PRODUCT_ALERT_EMAIL_LABEL=PRODUCT_ALERT_EMAIL_LABEL;var PRODUCT_ALERT_PAGER_DUTY_LABEL="PagerDuty";exports.PRODUCT_ALERT_PAGER_DUTY_LABEL=PRODUCT_ALERT_PAGER_DUTY_LABEL;var PRODUCT_ALERT_SLACK_LABEL="Slack";exports.PRODUCT_ALERT_SLACK_LABEL=PRODUCT_ALERT_SLACK_LABEL;var PRODUCT_REGION_US_EAST_LABEL="US East (N. Virginia)";exports.PRODUCT_REGION_US_EAST_LABEL=PRODUCT_REGION_US_EAST_LABEL;var PRODUCT_REGION_US_WEST_LABEL="US West (Oregon)";exports.PRODUCT_REGION_US_WEST_LABEL=PRODUCT_REGION_US_WEST_LABEL;var ROLE_0_DESCRIPTION="Full access for all roles.";exports.ROLE_0_DESCRIPTION=ROLE_0_DESCRIPTION;var ROLE_0_NAME="Super";exports.ROLE_0_NAME=ROLE_0_NAME;var ROLE_1_DESCRIPTION="Standard user access.";exports.ROLE_1_DESCRIPTION=ROLE_1_DESCRIPTION;var ROLE_1_NAME="Standard";exports.ROLE_1_NAME=ROLE_1_NAME;var ROLE_2_DESCRIPTION="Manages payments.";exports.ROLE_2_DESCRIPTION=ROLE_2_DESCRIPTION;var ROLE_2_NAME="Accounting";exports.ROLE_2_NAME=ROLE_2_NAME;var ROLE_3_DESCRIPTION="Manages users and roles and pages.";exports.ROLE_3_DESCRIPTION=ROLE_3_DESCRIPTION;var ROLE_3_NAME="Admin";exports.ROLE_3_NAME=ROLE_3_NAME;var SUCCESS_ACCOUNT_CREATE="Account created!";exports.SUCCESS_ACCOUNT_CREATE=SUCCESS_ACCOUNT_CREATE;var SUCCESS_ACCOUNT_REMOVE_USER="Account user removed!";exports.SUCCESS_ACCOUNT_REMOVE_USER=SUCCESS_ACCOUNT_REMOVE_USER;var SUCCESS_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE="Payment method updated!";exports.SUCCESS_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE=SUCCESS_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE;var SUCCESS_ACCOUNT_UPGRADE="Upgrade success!";exports.SUCCESS_ACCOUNT_UPGRADE=SUCCESS_ACCOUNT_UPGRADE;var SUCCESS_ACCOUNT_UPDATE_USER="Account user updated!";exports.SUCCESS_ACCOUNT_UPDATE_USER=SUCCESS_ACCOUNT_UPDATE_USER;var SUCCESS_ALERT_CREATE="Alert created!";exports.SUCCESS_ALERT_CREATE=SUCCESS_ALERT_CREATE;var SUCCESS_ALERT_EMAIL_CONFIRMATION="Confirmed successfully!";exports.SUCCESS_ALERT_EMAIL_CONFIRMATION=SUCCESS_ALERT_EMAIL_CONFIRMATION;var SUCCESS_ALERT_EMAIL_CONFIRMATION_RESEND="Confirmation email resent successfully!";exports.SUCCESS_ALERT_EMAIL_CONFIRMATION_RESEND=SUCCESS_ALERT_EMAIL_CONFIRMATION_RESEND;var SUCCESS_ALERT_UPDATE="Alert updated!";exports.SUCCESS_ALERT_UPDATE=SUCCESS_ALERT_UPDATE;var SUCCESS_ALERT_REMOVE="Alert removed!";exports.SUCCESS_ALERT_REMOVE=SUCCESS_ALERT_REMOVE;var SUCCESS_GENERIC="Success!";exports.SUCCESS_GENERIC=SUCCESS_GENERIC;var SUCCESS_INVITATION_CREATE="Invitation created!";exports.SUCCESS_INVITATION_CREATE=SUCCESS_INVITATION_CREATE;var SUCCESS_PAGE_CREATE="Page created!";exports.SUCCESS_PAGE_CREATE=SUCCESS_PAGE_CREATE;var SUCCESS_PAGE_UPDATE="Page updated!";exports.SUCCESS_PAGE_UPDATE=SUCCESS_PAGE_UPDATE;var SUCCESS_PAGE_REMOVE="Page removed!";exports.SUCCESS_PAGE_REMOVE=SUCCESS_PAGE_REMOVE;var SUCCESS_REMOVE="Removed!";exports.SUCCESS_REMOVE=SUCCESS_REMOVE;var SUCCESS_UPDATE="Updated!";exports.SUCCESS_UPDATE=SUCCESS_UPDATE;var SUCCESS_USER_CREATE_PASSWORD_RESET_TOKEN="You will receive an email with reset instructions shortly!";exports.SUCCESS_USER_CREATE_PASSWORD_RESET_TOKEN=SUCCESS_USER_CREATE_PASSWORD_RESET_TOKEN;var SUCCESS_USER_EMAIL_CONFIRMATION_SENT="Confirmation code sent!";exports.SUCCESS_USER_EMAIL_CONFIRMATION_SENT=SUCCESS_USER_EMAIL_CONFIRMATION_SENT;var SUCCESS_USER_LOGIN="Sucess!";exports.SUCCESS_USER_LOGIN=SUCCESS_USER_LOGIN;var SUCCESS_USER_LOGOUT="Logged out!";exports.SUCCESS_USER_LOGOUT=SUCCESS_USER_LOGOUT;var VALIDATON_ERROR_REQUIRED_ACCOUNT_ID="Account id is required.";exports.VALIDATON_ERROR_REQUIRED_ACCOUNT_ID=VALIDATON_ERROR_REQUIRED_ACCOUNT_ID;var VALIDATON_ERROR_REQUIRED_AUDITS="Audits is required.";exports.VALIDATON_ERROR_REQUIRED_AUDITS=VALIDATON_ERROR_REQUIRED_AUDITS;var VALIDATON_ERROR_REQUIRED_EMAIL="Email is required.";exports.VALIDATON_ERROR_REQUIRED_EMAIL=VALIDATON_ERROR_REQUIRED_EMAIL;var VALIDATON_ERROR_REQUIRED_FETCH_TIME="Fetch time is required.";exports.VALIDATON_ERROR_REQUIRED_FETCH_TIME=VALIDATON_ERROR_REQUIRED_FETCH_TIME;var VALIDATON_ERROR_REQUIRED_MESSAGE="Message is required.";exports.VALIDATON_ERROR_REQUIRED_MESSAGE=VALIDATON_ERROR_REQUIRED_MESSAGE;var VALIDATON_ERROR_REQUIRED_NAME="Name is required.";exports.VALIDATON_ERROR_REQUIRED_NAME=VALIDATON_ERROR_REQUIRED_NAME;var VALIDATON_ERROR_REQUIRED_LIGHTHOUSE_VERSION="Lighthouse version is required.";exports.VALIDATON_ERROR_REQUIRED_LIGHTHOUSE_VERSION=VALIDATON_ERROR_REQUIRED_LIGHTHOUSE_VERSION;var VALIDATON_ERROR_REQUIRED_OWNER_ID="Owner id is required.";exports.VALIDATON_ERROR_REQUIRED_OWNER_ID=VALIDATON_ERROR_REQUIRED_OWNER_ID;var VALIDATON_ERROR_REQUIRED_PASSWORD="Password is required.";exports.VALIDATON_ERROR_REQUIRED_PASSWORD=VALIDATON_ERROR_REQUIRED_PASSWORD;var VALIDATON_ERROR_REQUIRED_PAGE_ID="Page id is required.";exports.VALIDATON_ERROR_REQUIRED_PAGE_ID=VALIDATON_ERROR_REQUIRED_PAGE_ID;var VALIDATON_ERROR_REQUIRED_PRODUCT_ID="Product id is required.";exports.VALIDATON_ERROR_REQUIRED_PRODUCT_ID=VALIDATON_ERROR_REQUIRED_PRODUCT_ID;var VALIDATON_ERROR_REQUIRED_ROLE_ID="Role id is required.";exports.VALIDATON_ERROR_REQUIRED_ROLE_ID=VALIDATON_ERROR_REQUIRED_ROLE_ID;var VALIDATON_ERROR_REQUIRED_URL="URL is required.";exports.VALIDATON_ERROR_REQUIRED_URL=VALIDATON_ERROR_REQUIRED_URL;var VALIDATON_ERROR_REQUIRED_USER_AGENT="User agent is required.";exports.VALIDATON_ERROR_REQUIRED_USER_AGENT=VALIDATON_ERROR_REQUIRED_USER_AGENT;var VALIDATON_ERROR_REQUIRED_SUBSCRIPTION_ID="Subscription id is required.";exports.VALIDATON_ERROR_REQUIRED_SUBSCRIPTION_ID=VALIDATON_ERROR_REQUIRED_SUBSCRIPTION_ID;