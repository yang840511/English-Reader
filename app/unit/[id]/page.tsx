import { getUnitData } from '../../../lib/wordData';
import UnitDetail from './UnitDetail';

export async function generateStaticParams() {
  return [
    { id: 'upper-1' },
    { id: 'upper-2' },
    { id: 'upper-3' },
    { id: 'upper-4' },
    { id: 'upper-5' },
    { id: 'upper-6' },
    { id: 'lower-1' },
    { id: 'lower-2' },
    { id: 'lower-3' },
    { id: 'lower-4' },
  ];
}

export default function UnitPage({ params }: { params: { id: string } }) {
  const unitData = getUnitData(params.id);
  
  if (!unitData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">单元未找到</h1>
          <p className="text-gray-600">请检查链接是否正确</p>
        </div>
      </div>
    );
  }

  return <UnitDetail unitData={unitData} />;
}