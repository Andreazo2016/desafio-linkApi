import mongoose from 'mongoose';

const DealSchema = mongoose.Schema(
    {
        cod: Number,
        title: String,
        owern_name: String,
        value: Number,
        currency: String,
        won_time: String,
        status: String,
        bling_send: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Deals', DealSchema);
