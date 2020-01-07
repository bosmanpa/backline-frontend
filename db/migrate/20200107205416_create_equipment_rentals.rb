class CreateEquipmentRentals < ActiveRecord::Migration[6.0]
  def change
    create_table :equipment_rentals do |t|
      t.integer :event_id
      t.integer :equipment_id

      t.timestamps
    end
  end
end
