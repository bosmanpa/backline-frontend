class EquipmentTypesController < ApplicationController
    def index
        equipment_types = EquipmentType.all
        render json: equipment_types
    end

    def show
        equipment_type = EquipmentType.find(params[:id])
        render json: equipment_type
    end

end
