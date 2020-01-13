class EquipmentModelsController < ApplicationController
    def index
        equipment_models = EquipmentModel.all
        render json: equipment_models
    end
    
    def show
        equipment_model = EquipmentModel.find(params[:id])
        render json: equipment_model
    end

end
