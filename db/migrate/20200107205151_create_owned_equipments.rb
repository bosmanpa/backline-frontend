class CreateOwnedEquipments < ActiveRecord::Migration[6.0]
  def change
    create_table :owned_equipments do |t|
      t.integer :owner_id
      t.integer :type_id
      t.integer :model_id
      t.integer :price

      t.timestamps
    end
  end
end
