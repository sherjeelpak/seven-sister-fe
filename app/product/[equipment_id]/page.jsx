import EmployeeCard from '@/components/EmployeeCard';

async function getProduct(equipment_id) {
    const apiUrl = " https://c986-207-161-49-100.ngrok-free.app";
    // const apiUrl = "http://localhost:8000";
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
