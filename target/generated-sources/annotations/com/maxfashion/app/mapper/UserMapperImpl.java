package com.maxfashion.app.mapper;

import com.maxfashion.app.dto.UserDTO;
import com.maxfashion.app.dto.UserDTO.UserDTOBuilder;
import com.maxfashion.app.entity.User;
import com.maxfashion.app.entity.User.UserBuilder;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-30T14:30:51+0530",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 11.0.18 (Oracle Corporation)"
)
public class UserMapperImpl implements UserMapper {

    @Override
    public User convertToEntity(UserDTO userDto) {
        if ( userDto == null ) {
            return null;
        }

        UserBuilder user = User.builder();

        user.firstName( userDto.getFirstName() );
        user.lastName( userDto.getLastName() );
        user.mobileNo( userDto.getMobileNo() );
        user.email( userDto.getEmail() );
        user.password( userDto.getPassword() );

        return user.build();
    }

    @Override
    public UserDTO convertToDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDTOBuilder userDTO = UserDTO.builder();

        userDTO.firstName( user.getFirstName() );
        userDTO.lastName( user.getLastName() );
        userDTO.mobileNo( user.getMobileNo() );
        userDTO.email( user.getEmail() );
        userDTO.password( user.getPassword() );

        return userDTO.build();
    }
}
