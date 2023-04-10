package com.maxfashion.app.mapper;

import com.maxfashion.app.dto.AddressDto;
import com.maxfashion.app.entity.Address;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-30T14:30:51+0530",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 11.0.18 (Oracle Corporation)"
)
public class AddressMapperImpl implements AddressMapper {

    @Override
    public Address convertDtoToEntity(AddressDto addressDto) {
        if ( addressDto == null ) {
            return null;
        }

        Address address = new Address();

        address.setId( addressDto.getId() );
        address.setName( addressDto.getName() );
        address.setMobileNo( addressDto.getMobileNo() );
        address.setPincode( addressDto.getPincode() );
        address.setCity( addressDto.getCity() );
        address.setState( addressDto.getState() );
        address.setHouseNo( addressDto.getHouseNo() );
        address.setStreetNo( addressDto.getStreetNo() );
        address.setLandmark( addressDto.getLandmark() );

        return address;
    }

    @Override
    public AddressDto convertEntityToDto(Address address) {
        if ( address == null ) {
            return null;
        }

        AddressDto addressDto = new AddressDto();

        addressDto.setId( address.getId() );
        addressDto.setName( address.getName() );
        addressDto.setMobileNo( address.getMobileNo() );
        addressDto.setPincode( address.getPincode() );
        addressDto.setCity( address.getCity() );
        addressDto.setState( address.getState() );
        addressDto.setHouseNo( address.getHouseNo() );
        addressDto.setStreetNo( address.getStreetNo() );
        addressDto.setLandmark( address.getLandmark() );

        return addressDto;
    }
}
