class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.datetime :renter_created
      t.string :renter_name
      t.string :renter_location
      t.string :renter_info
      t.string :renter_image
      t.datetime :owner_created
      t.string :owner_name
      t.string :owner_location
      t.string :owner_info
      t.string :owner_image

      t.timestamps
    end
  end
end
