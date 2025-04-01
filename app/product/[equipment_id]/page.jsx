import EmployeeCard from '@/components/EmployeeCard';

async function getProduct(equipment_id) {
    const apiUrl = "http://127.0.0.1:8000";
    const res = await fetch(`${apiUrl}/api/products/${equipment_id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    return res.json();
}

export default async function ProductPage({ params }) {
    const { equipment_id } = params;
    const product = await getProduct(equipment_id);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <EmployeeCard product={product} />
        </div>
    );
}
