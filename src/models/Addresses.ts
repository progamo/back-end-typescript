import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Addresses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  street_number: string;

  @Column()
  postcode: string;

  @Column()
  gps_lat: string;

  @Column()
  gps_long: string;
}

export default Addresses;