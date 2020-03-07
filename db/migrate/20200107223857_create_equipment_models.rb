class CreateEquipmentModels < ActiveRecord::Migration[6.0]
  def change
    create_table :equipment_models do |t|
      t.integer :equipment_type_id
      t.string :name
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
