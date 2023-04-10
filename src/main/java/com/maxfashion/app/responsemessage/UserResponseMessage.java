package com.maxfashion.app.responsemessage;

import org.springframework.stereotype.Component;
import com.maxfashion.app.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserResponseMessage {
	private UserDTO data;
	private String message;
	private boolean isError;
	private Throwable stactTrace;
}
