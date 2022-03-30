import React, { useEffect, useCallback, useState } from 'react';
import { getApi } from '../../api/Fetcher';
import { NetDetailInfoResponse, SinglePost } from './types';

export const useGetDetail = (id: number, token?: string): {
  detailInfo: SinglePost | null;
  loading: boolean;
  getDetailInfo: () => void;
} => {
  const [loading, setLoading] = useState(true);
  const [detailInfo, setDetailInfo] = useState<SinglePost | null>(null);

  const getDetailInfo = async () => {
    // setLoading(true);
    try {
      const response = await getApi(`/posts/${id}`, { params: { token } });
      const { data } = response;
      const result = data as NetDetailInfoResponse;

      const { data: detailData } = result;
      setDetailInfo(detailData);
      setLoading(false);
    } catch (error) {
      throw new Error('getDetailInfo error')
    }
  }

  useEffect(() => {
    id && getDetailInfo();
  }, [id]);

  return {
    detailInfo,
    loading,
    getDetailInfo,
  }
}
