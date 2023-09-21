const BaseNoti = {
  SUCCESS: 'SUCCESS',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  GLOBAL: {
    UNKNOW_ERROR: 'UNKNOW_ERROR',
    SUCCESS: 'SUCCESS',
  },
  AUTH: {
    AUTH_FORBIDDEN: 'AUTH_FORBIDDEN',
    WRONG_PASSWORD: 'WRONG_PASSWORD',
    INVALID_TOKEN: 'INVALID_TOKEN',
    USERNAME_NOT_EXISTS: 'USERNAME_NOT_EXISTS',
    GOOGLE_LOGIN: 'GOOGLE_LOGIN',
    TOKEN_EXPIRED: 'TOKEN_EXPIRED',
    NOT_VERIFY_MAIL: 'NOT_VERIFY_MAIL',
    SECRET_NOT_VALID: 'SECRET_NOT_VALID',
  },
  USER: {
    USER_NOT_EXISTS: 'USER_NOT_EXISTS',
    USER_NOT_SELLER: 'USER_NOT_SELLER',
    USER_NOT_SUPPLIER: 'USER_NOT_SUPPLIER',
    USER_NOT_ADMIN: 'USER_NOT_ADMIN',
    USER_EXISTS: 'USER_EXISTS',
    USERNAME_EXISTS: 'USERNAME_EXISTS',
    USER_NOT_ACTIVE: 'USER_NOT_ACTIVE',
    WRONG_CODE: 'WRONG_CODE',
    BALANCE_NOT_ENOUGH: 'BALANCE_NOT_ENOUGH',
    DEDUCTION_ERROR: 'DEDUCTION_ERROR',
    NOT_HAVE_TRANSACTION: 'NOT_HAVE_TRANSACTION',
    VERIFY_EMAIL_FAIL: 'VERIFY_EMAIL_FAIL',
    VERIFY_EMAIL_FAIL_EXP: 'VERIFY_EMAIL_FAIL_EXP',
    VERIFY_EMAIL_ALREADY: 'VERIFY_EMAIL_ALREADY',
    VERIFY_EMAIL_SUCCESS: 'VERIFY_EMAIL_SUCCESS',
    ACCOUNT_NOT_YET_VERIFY: 'ACCOUNT_NOT_YET_VERIFY',
  },
  COOPERATION: {
    COOPERATION_EXISTS: 'COOPERATION_EXISTS',
    COOPERATION_NOT_EXISTS: 'COOPERATION_NOT_EXISTS',
  },
  PAYMENT: {
    PAYMENT_CANCEL: 'PAYMENT_CANCEL',
    PAYMENT_INVALID: 'PAYMENT_INVALID',
    PAYMENT_ALREADY_DONE: 'PAYMENT_ALREADY_DONE',
    NOT_HAVE_MERTRXID: 'NOT_HAVE_MERTRXID',
  },
  PROFILE: {
    PROFILE_NOT_EXISTS: 'PROFILE_NOT_EXISTS',
    USERNAME_EXISTS: 'USERNAME_EXISTS',
  },
  REVIEW: {
    REVIEW_ALREADY_EXISTS: 'REVIEW_ALREADY_EXISTS',
    REVIEW_NOT_EXISTS: 'REVIEW_NOT_EXISTS',
  },
  COUPON: {
    COUPON_ALREADY_EXISTS: 'COUPON_ALREADY_EXISTS',
    COUPON_NOT_EXISTS: 'COUPON_NOT_EXISTS',
    COUPON_INVALID: 'COUPON_INVALID',
    USER_ALREADY_USED: 'USER_ALREADY_USED',
    CODE_ALREADY_EXISTS: 'CODE_ALREADY_EXISTS',
    COUPON_NOT_READY: 'COUPON_NOT_READY',
    COUPON_EXPIRED: 'COUPON_EXPIRED',
    OUT_OF_APPLICATION: 'OUT_OF_APPLICATION',
  },
  CATEGORY: {
    CATEGORY_NOT_EXISTS: 'CATEGORY_NOT_EXISTS',
    CATEGORY_ALREADY_EXISTS: 'CATEGORY_ALREADY_EXISTS',
    REVIEW_ALREADY_EXISTS: 'REVIEW_ALREADY_EXISTS',
    REVIEW_NOT_EXISTS: 'REVIEW_NOT_EXISTS',
  },
  COMMENT: {
    COMMENT_ALREADY_EXISTS: 'COMMENT_ALREADY_EXISTS',
    COMMENT_NOT_EXISTS: 'COMMENT_NOT_EXISTS',
    NOT_BOUGHT_YET: 'NOT_BOUGHT_YET',
  },
  QUESTION: {
    QUESTION_ALREADY_EXISTS: 'QUESTION_ALREADY_EXISTS',
    QUESTION_NOT_EXISTS: 'QUESTION_NOT_EXISTS',
  },
  PRODUCT: {
    PRODUCT_NOT_EXISTS: 'PRODUCT_NOT_EXISTS',
    SLUG_ALREADY_EXISTS: 'SLUG_ALREADY_EXISTS',
    SLUG_ENGLISH_ALREADY_EXISTS: 'SLUG_ENGLISH_ALREADY_EXISTS',
    REDEEM_CODE_NOT_EXISTS: 'REDEEM_CODE_NOT_EXISTS',
    REDEEM_CODE_NOT_UNIQUE: 'REDEEM_CODE_NOT_UNIQUE',
    SOFTWARE_NOT_EXISTS: 'SOFTWARE_NOT_EXISTS',
    MISSING_ACTIVE_INFO: 'MISSING_ACTIVE_INFO',
  },
  SETTING: {
    CREATE_SETTING_SUCCESS: 'CREATE_SETTING_SUCCESS',
    UPDATE_SETTING_SUCCESS: 'UPDATE_SETTING_SUCCESS',
    DELETE_SETTING_SUCCESS: 'DELETE_SETTING_SUCCESS',
  },
  TAG: {
    TAG_NOT_EXISTS: 'TAG_NOT_EXISTS',
  },
  USER_TAG: {
    USER_TAG_EXISTS: 'USER_TAG_EXISTS',
    USER_TAG_NOT_EXISTS: 'USER_TAG_NOT_EXISTS',
  },
  GALLERY: {
    IMAGE_NOT_EXISTS: 'IMAGE_NOT_EXISTS',
  },
  CUSTOMER_TYPE: {
    CUSTOMER_TYPE_NOT_EXISTS: 'CUSTOMER_TYPE_NOT_EXISTS',
  },
  SIMILAR_PRODUCT: {
    SIMILAR_PRODUCT_NOT_EXISTS: 'SIMILAR_PRODUCT_NOT_EXISTS',
  },
  INTEGRATE_TOOL: {
    INTEGRATE_TOOL_NOT_EXISTS: 'INTEGRATE_TOOL_NOT_EXISTS',
  },
  CART: {
    CART_NOT_EXISTS: 'CART_NOT_EXISTS',
    CART_IS_EMPTY: 'CART_IS_EMPTY',
  },
  ORDER: {
    ORDER_NOT_EXISTS: 'ORDER_NOT_EXISTS',
  },
  PRODUCT_PACKAGE: {
    PRODUCT_PACKAGE_NOT_EXISTS: 'PRODUCT_PACKAGE_NOT_EXISTS',
  },
  SALE_PRODUCT: {
    SALE_PRODUCT_NOT_EXISTS: 'SALE_PRODUCT_NOT_EXISTS',
  },
  REDEEMCODE: {
    REDEEMCODE_NOT_ENOUGH: 'REDEEMCODE_NOT_ENOUGH',
    REDEEMCODE_NOT_EXISTS: 'REDEEMCODE_NOT_EXISTS',
  },
  LIKE: {
    ALREADY_LIKED: 'ALREADY_LIKED',
    NOT_LIKED_YET: 'NOT_LIKED_YET',
  },
  NOTIFY: {
    NOTIFY_NOT_EXISTS: 'NOTIFY_NOT_EXISTS',
  },
  VARIANT: {
    VARIANT_NOT_ENOUGH: 'VARIANT_NOT_ENOUGH',
    VARIANT_NOT_EXISTS: 'VARIANT_NOT_EXISTS',
    OUT_OF_STOCK: 'OUT_OF_STOCK',
  },
  ACTIVEINFO: {
    ACTIVE_INFO_INVALID: 'ACTIVE_INFO_INVALID',
  },
};

export default BaseNoti;
