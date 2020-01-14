class OwnedEquipmentsController < ApplicationController
    wrap_parameters :owned_equipment, include: [:owner_id, :type_id, :model_id]

    def new
        owned_equipment = OwnedEquipment.new
        render json: owned_equipment
    end

    def index
        owned_equipments = OwnedEquipment.all
        render json: owned_equipments
    end

    def show
        owned_equipment = OwnedEquipment.find(params[:id])
        render json: owned_equipment
    end

    def create
        owned_equipment = OwnedEquipment.create(owned_equipment_params)
        render json: owned_equipment
    end

    private

    def owned_equipment_params
      params.require(:owned_equipment).permit(:owner_id, :model_id)
    end

end
