package com.maxfashion.app.exception;

public class ResourceNotFoundException extends RuntimeException{

		private String code;
		public ResourceNotFoundException() {
		}
		public ResourceNotFoundException(String message, Throwable cause,String code) {
			super(message, cause);
			this.code=code;
		}
		@Override
		public String getMessage() {
		// TODO Auto-generated method stub
		return super.getMessage()+this.code;
		}
		public ResourceNotFoundException(String code) {
			super();
			this.code = code;
		}
		public ResourceNotFoundException(String message, Throwable cause, boolean enableSuppression,
				boolean writableStackTrace) {
			super(message, cause, enableSuppression, writableStackTrace);
			// TODO Auto-generated constructor stub
		}
		public ResourceNotFoundException(String message, Throwable cause) {
			super(message, cause);
			// TODO Auto-generated constructor stub
		}
		public ResourceNotFoundException(Throwable cause) {
			super(cause);
			// TODO Auto-generated constructor stub
		}
		
}
