class CreateEquipment < ActiveRecord::Migration[6.0]
  def change
    create_table :equipment do |t|
      t.string :type
      t.string :model
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
