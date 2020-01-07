class CreateOwnedEquipments < ActiveRecord::Migration[6.0]
  def change
    create_table :owned_equipments do |t|
      t.integer :owner_id
      t.string :type
      t.string :model
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
